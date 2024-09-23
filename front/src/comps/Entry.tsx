interface EntryProps {
    item: {
        text: string;
        description: string;
    };
    key: string;
}

export default function Entry(props: EntryProps) {
    return (
        <>
            <div className="scrollitem">
                <p className="itemname">{props.item.text}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </>
    )
}