import React, { useCallback, useState } from "react";
import { PasswordEntry } from "../components/PasswordEntry";

interface Option {
  showLabel?: boolean;
}

export const usePasswordEntry = ({ showLabel = false }: Option = {}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleChangeConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value);
    },
    []
  );

  const validate = useCallback(() => {
    if (password.length < 6) {
      return {
        error: true,
        message: "Password should have a minimum length of 6 characters",
      };
    } else if (!/[A-Z]/.test(password)) {
      return {
        error: true,
        message: "Password should have at least 1 uppercase character",
      };
    } else if (!/[a-z]/.test(password)) {
      return {
        error: true,
        message: "Password should have at least 1 lowercase character",
      };
    } else if (!/\d/.test(password)) {
      return {
        error: true,
        message: "Password should have at least 1 number",
      };
    } else if (!/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(password)) {
      return {
        error: true,
        message: "Password should have at least 1 special character",
      };
    } else if (password !== confirmPassword) {
      return {
        error: true,
        message: "Passwords do not match",
      };
    }
    return { error: false };
  }, [password, confirmPassword]);

  const PasswordEntryElement = (
    <PasswordEntry
      showLabel={showLabel}
      password={password}
      confirmPassword={confirmPassword}
      handleChangePassword={handleChangePassword}
      handleChangeConfirmPassword={handleChangeConfirmPassword}
    />
  );

  return { PasswordEntryElement, password, validate };
};
