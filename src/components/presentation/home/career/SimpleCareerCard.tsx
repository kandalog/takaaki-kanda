import { CareerCard } from "../../../common/CareerCard";

export function SimpleCareerCard() {
  return (
    <CareerCard
      title="Simple株式会社"
      duration="2023/02/01 - 2024/03/31"
      positions={[
        "フロントエンドエンジニア(インターン) (TypeScript, React, Next.js)",
        "保育士向け求人サイトリプレイス / salesforce(連携・開発)",
        "開発部",
      ]}
      achievements={[
        "既存の保育士向け求人サイトのフロントエンド刷新プロジェクトを技術選定から主導し、開発基盤の構築や開発のリードを行うことで、チーム全体のフロントエンド開発力を強化しました",
        "salesforce導入に伴う移行作業やフロントエンド領域の独自コンポーネント開発などを行い、営業活動を円滑化しました",
        "社内プロダクトのDocker化を提案・推進することで、開発環境の統一化と簡略化を行いました",
      ]}
    />
  );
}
