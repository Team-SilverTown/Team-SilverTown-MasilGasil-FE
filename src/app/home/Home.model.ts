"use client";

import { useState } from "react";

const useHomeModel = () => {
  const [isNotification] = useState<null | boolean>(null);

  return {
    isNotification,
  };
};

export default useHomeModel;
