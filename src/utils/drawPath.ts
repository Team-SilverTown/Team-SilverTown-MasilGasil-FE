import Theme from "@/styles/theme";
import { GeoPosition } from "@/types/OriginDataType";

export const drawPath = (path: GeoPosition[]) => {
  let [minLat, maxLat, minLng, maxLng] = [Infinity, -Infinity, Infinity, -Infinity];
  const CANVAS_SIZE = 480;
  const CANVAS_OFFSET = CANVAS_SIZE * 0.2;

  for (const p of path) {
    minLat = Math.min(minLat, p.lat);
    maxLat = Math.max(maxLat, p.lat);
    minLng = Math.min(minLng, p.lng);
    maxLng = Math.max(maxLng, p.lng);
  }

  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  const scaleX = (canvas.width - CANVAS_OFFSET * 2) / (maxLng - minLng);
  const scaleY = (canvas.height - CANVAS_OFFSET * 1.5) / (maxLat - minLat);

  const pathCanvas = canvas.getContext("2d");

  if (pathCanvas) {
    pathCanvas.fillStyle = Theme.lightTheme.gray_100;
    pathCanvas.fillRect(0, 0, canvas.width, canvas.height);

    pathCanvas.strokeStyle = Theme.lightTheme.green_500;
    pathCanvas.lineJoin = "round";
    pathCanvas.lineCap = "round";
    pathCanvas.lineWidth = 7;
    pathCanvas.font = "16px Arial";

    pathCanvas.beginPath();

    for (let i = 0; i < path.length; i++) {
      let x, y;

      // 좌표 스케일링
      if (path.length === 1) {
        x = canvas.width / 2;
        y = canvas.height / 2;
      } else {
        x = CANVAS_OFFSET + (path[i].lng - minLng) * scaleX;
        y = canvas.height - CANVAS_OFFSET - (path[i].lat - minLat) * scaleY;
      }

      // 경로 그리기
      if (i === 0) {
        pathCanvas.moveTo(x, y);
      } else {
        pathCanvas.lineTo(x, y);
      }
    }

    pathCanvas.stroke();

    const [startX, startY] = [
      CANVAS_OFFSET + (path[0].lng - minLng) * scaleX,
      canvas.height - CANVAS_OFFSET - (path[0].lat - minLat) * scaleY,
    ];

    const [endX, endY] = [
      CANVAS_OFFSET + (path[path.length - 1].lng - minLng) * scaleX,
      canvas.height - CANVAS_OFFSET - (path[path.length - 1].lat - minLat) * scaleY,
    ];

    pathCanvas.beginPath();
    pathCanvas.arc(startX, startY, 6, 0, Math.PI * 2, false);
    pathCanvas.arc(endX, endY, 6, 0, Math.PI * 2, false);

    pathCanvas.fillStyle = Theme.lightTheme.green_500;
    pathCanvas.fill();

    pathCanvas.fillText("👟", startX, startY);
    pathCanvas.fillText("⛳️", endX, endY);
  }

  return pathCanvas;
};
