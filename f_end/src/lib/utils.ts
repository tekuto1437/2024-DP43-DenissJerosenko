// Function to truncate text and add "..."
export function truncateWithEllipsis(text: string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

