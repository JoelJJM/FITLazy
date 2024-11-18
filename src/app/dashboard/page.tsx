"use client";

import React from "react";
import { logout } from "../login/actions";

export default function Dashboard() {
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
