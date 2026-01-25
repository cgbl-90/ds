import React, { useState } from "react";
import { Button } from "../Atoms/Button";
import { Icon } from "../Atoms/Icon";
import "./geolocation-card.css";

interface LocationData {
  latitude: number;
  longitude: number;
}

interface GeolocationCardProps {
  /** Optional callback triggered when location is successfully retrieved */
  onLocationUpdate?: (location: LocationData) => void;
}

export const GeolocationCard: React.FC<GeolocationCardProps> = ({ onLocationUpdate }) => {
  const [status, setStatus] = useState<string>("Idle");
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Unsupported");
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setStatus("Fetching...");
    setLocation(null);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setStatus("Success");
        setLocation({ latitude, longitude });
        if (onLocationUpdate) {
          onLocationUpdate({ latitude, longitude });
        }
      },
      (err) => {
        setStatus("Error");
        setError(`Error: ${err.message}`);
      }
    );
  };

  return (
    <div className="storybook-geolocation-card">
      <div className="card-header">
        <Icon size="medium" />
        <h4>Geolocation API</h4>
      </div>
      <div className="card-body">
        <p data-testid="status">
          <strong>Status:</strong> {status}
        </p>
        {location && (
          <p data-testid="location-display">
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        )}
        {error && (
          <p className="error-message" data-testid="error-display">
            {error}
          </p>
        )}
      </div>
      <div className="card-footer">
        <Button
          primary
          label="Get My Location"
          onClick={getLocation}
          disabled={status === "Fetching..."}
        />
      </div>
    </div>
  );
};