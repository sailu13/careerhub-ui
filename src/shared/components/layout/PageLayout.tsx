import type { ReactNode } from "react"
import PageContainer from "../common/PageContainer";
import PageHeader from "../common/PageHeader";

type Props = {
    title: string; subtitle?: string; showBack?: boolean; children: ReactNode;
};

export default function PageLayout({title, subtitle, showBack, children}: Props) {
    return (
        <PageContainer>
            <PageHeader title={title} subtitle={subtitle} showBack={showBack} />
            <div className="space-y-8">{children}</div>  
        </PageContainer>
    )
}