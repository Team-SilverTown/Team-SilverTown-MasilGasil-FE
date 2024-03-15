export const regularFields: {
  title: string;
  placeholder: string;
  type?: string;
  name: "thumbnail" | "title" | "content" | "location" | "date";
}[] = [
  { title: "제목", placeholder: "제목을 입력해주세요.", name: "title" },
  { title: "썸네일", placeholder: "썸네일을 입력해주세요.", name: "thumbnail" },
  { title: "설명", placeholder: "설명을 입력해주세요.", name: "content" },
  { title: "위치", placeholder: "위치를 입력해주세요.", name: "location" },
  { title: "희망 날짜", placeholder: "날짜를 입력해주세요.", name: "date" },
];
