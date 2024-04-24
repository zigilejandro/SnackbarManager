// Create a new context for the SnackbarManager
// Path: SnackbarManager/SnackbarContext.ts
import { createContext } from "react";
export const SnackbarContext = createContext({ addSnackbar: (message: string) => {} });

