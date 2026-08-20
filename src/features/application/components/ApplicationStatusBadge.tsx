import StatusBadge from "@/shared/components/common/StatusBadge";

interface Props {
    status: string;
}

export default function ApplicationStatusBadge({status}: Props) {
    const formattedStatus = status.replaceAll("_", " ").toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return (<StatusBadge>{formattedStatus}</StatusBadge>);
}