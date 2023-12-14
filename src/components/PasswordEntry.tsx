import React, { useCallback, useState } from "react";

interface PasswordEntryProps {
  showLabel?: boolean;
  showButton?: boolean;
  password: string;
  handleChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confirmPassword: string;
  handleChangeConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordEntry = ({
  showLabel = false,
  password,
  handleChangePassword,
  confirmPassword,
  handleChangeConfirmPassword,
}: PasswordEntryProps) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {showLabel && <label>Password</label>}
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Password"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {showLabel && <label>Confirm Password</label>}
        <input
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          placeholder="Confirm Password"
        />
      </div>
    </>
  );
};
