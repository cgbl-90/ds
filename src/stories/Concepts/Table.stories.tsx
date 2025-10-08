import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { headers, rows } from "./tableData";

const meta: Meta<typeof Table> = {
  title: "Concepts/Flex Tables",
  component: Table,
  argTypes: {
    flexColumns: {
      table: { disable: true },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Table>;

const allEqual = ["1 1 0", "1 1 0", "1 1 0", "1 1 0"];

export const Flex_01_EqualFill: Story = {
  name: "Equal Fill (1 1 0)",
  args: {
    flexColumns: allEqual,
    headers,
    rows: rows.slice(0, 5),
  },
};

export const Flex_02_Weighted_1231: Story = {
  name: "Weighted Grow (2:3:1:0)",
  args: {
    flexColumns: ["2 1 0", "3 1 0", "1 1 0", "0 1 0"],
    headers,
    rows: rows.slice(0, 5),
  },
};

export const Flex_03_Fixed_1stCol: Story = {
  name: "Fixed 1st Column (0 0 120px)",
  args: {
    flexColumns: ["0 0 120px", "1 1 0", "1 1 0", "1 1 0"],
    headers,
    rows: rows.slice(0, 10),
  },
};

export const Flex_04_Fixed_LastCol: Story = {
  name: "Fixed Last Column (0 0 80px)",
  args: {
    flexColumns: ["1 1 0", "1 1 0", "1 1 0", "0 0 80px"],
    headers,
    rows: rows.slice(0, 10),
  },
};

export const Flex_05_Basis_Percentage: Story = {
  name: "Basis Percent (20% 30% 20% 30%)",
  args: {
    flexColumns: ["1 1 20%", "1 1 30%", "1 1 20%", "1 1 30%"],
    headers,
    rows: rows.slice(0, 15),
  },
};

export const Flex_06_Basis_Calc: Story = {
  name: "Basis Calc (1 1 calc(100%/4))",
  args: {
    flexColumns: [
      "1 1 calc(100% / 4)",
      "1 1 calc(100% / 4)",
      "1 1 calc(100% / 4)",
      "1 1 calc(100% / 4)",
    ],
    headers,
    rows: rows.slice(0, 15),
  },
};

export const Flex_07_Grow_Only_Basis_Auto: Story = {
  name: "Grow Only (Basis auto)",
  args: {
    flexColumns: ["1 0 auto", "2 0 auto", "1 0 auto", "1 0 auto"],
    headers,
    rows,
  },
};

export const Flex_08_Fixed_MiddleColumns: Story = {
  name: "Fixed Inner Columns",
  args: {
    flexColumns: ["1 1 0", "0 0 150px", "0 0 200px", "1 1 0"],
    headers,
    rows,
  },
};

export const Flex_09_Minimally_Shrinkable: Story = {
  name: "Minimal Shrink (Grow 1, Shrink 0)",
  args: {
    flexColumns: ["1 0 auto", "1 0 auto", "1 0 auto", "1 0 auto"],
    headers,
    rows: rows.slice(0, 5),
  },
};

export const Flex_10_Mixed_Grow_Basis: Story = {
  name: "Mixed Grow & Fixed Basis",
  args: {
    flexColumns: ["0 0 200px", "0 0 15%", "2 1 0", "1 1 0"],
    headers,
    rows: rows.slice(0, 10),
  },
};
