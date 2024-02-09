/* eslint-disable  */
import { useSyncExternalStore } from "react";

let listeners: any[] = [];

export const useLocalStorage = (key: string): [string | null, Function] => {
  const value = useSyncExternalStore(
    subscribe,
    () => getSnapshot(key),
    () => getServerSnapshot(key),
  );

  function changeValue(value: string) {
    localStorage.setItem(key, value);
    emitChange();
  }

  return [value, changeValue];
};

function getSnapshot(key: string) {
  return localStorage.getItem(key);
}

function getServerSnapshot(key: string) {
  if (key === "theme") return "light";
  return null;
}

function subscribe(listener: Function) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
