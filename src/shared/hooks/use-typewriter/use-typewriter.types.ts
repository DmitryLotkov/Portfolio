export type UseTypewriterOptions = {
    words: string | string[];
    speed?: number;
    eraseSpeed?: number;
    delayBeforeErase?: number;
    delayBeforeType?: number;
    startDelay?: number;
    loop?: boolean;
};

export type UseTypewriterReturn = {
    currentText: string;
    isDeleting: boolean;
};
