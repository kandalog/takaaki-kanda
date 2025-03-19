import { CareerCard } from "../../../common/CareerCard";

export function ItandiCareerCard() {
  return (
    <CareerCard
      title="イタンジ株式会社"
      duration="2022/05/01 - 2023/02/28"
      positions={[
        "データエンジニア(インターン) (Python, Scrapy, JavaScript)",
        "データ整形/クローラー作成",
        "データ基盤チーム",
      ]}
      achievements={[
        "不動産サイトをクローリングするためのクローラー作成を行いました",
        "社内ツール自動化プロジェクトにおけるテストを実装することで、システムの信頼性を確保しました",
      ]}
    />
  );
}
