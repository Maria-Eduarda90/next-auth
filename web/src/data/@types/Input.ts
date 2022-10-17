export type InpuType = "text" | "password" | "email";

export type InputProps = {
    type: InpuType;
    placeholder?: string;
}