"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setMembers } from "@/store/generalSlice";

function Preloader({ members }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setMembers(members));
    loaded.current = true;
  }

  return null;
}

export default Preloader;