import FlexibleForm from "@/components/base/FlexibleForm";

interface AuditForm {}

export default function AuditForm() {
    return (
        <FlexibleForm
            callback={async () => {
                "use server";
            }}
        />
    );
}
