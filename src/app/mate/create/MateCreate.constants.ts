export const regularFields: {
  title: string;
  placeholder: string;
  type?: string;
  name: "title" | "content" | "location" | "date";
}[] = [
  { title: "제목", placeholder: "제목을 입력해주세요.", name: "title" },
  { title: "설명", type: "textarea", placeholder: "설명을 입력해주세요.", name: "content" },
  { title: "위치", placeholder: "상세 위치를 입력해주세요.", name: "location" },
  { title: "희망 날짜", placeholder: "날짜를 입력해주세요.", name: "date" },
];
