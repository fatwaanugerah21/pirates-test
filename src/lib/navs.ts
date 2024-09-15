import { INav } from "@/types/common.type";
import { AlignJustifyIcon, CalendarIcon, HomeIcon, MessageSquareMoreIcon, SearchIcon } from "lucide-react";

export const searchNavs: INav[] = [
  { label: "전체", path: "#" },
  { label: "스시•해산물", path: "#" },
  { label: "장에", path: "#" },
  { label: "덴푸라", path: "#" },
  { label: "돈카츠•쿠시카츠", path: "#" },
]

export const pageNavs: INav[] = [
  { icon: HomeIcon, label: "색", path: "#" },
  { icon: SearchIcon, label: "검색", path: "#" },
  { icon: MessageSquareMoreIcon, label: "내 예약", path: "#" },
  { icon: CalendarIcon, label: "피드", path: "#" },
  { icon: AlignJustifyIcon, label: "검", path: "#" },
];