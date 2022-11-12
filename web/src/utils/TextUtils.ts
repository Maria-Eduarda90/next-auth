export const TextUtils = {
    limitText(text: string, maximumSize: number): string{
        if(text.length < maximumSize){
            return text;
        }

        return text.slice(0, maximumSize) + '...';
    }
}