import { UseTypewriterOptions } from '@/common/hooks';

export interface TypewriterProps extends Omit<UseTypewriterOptions, 'words'> {
    text: string | string[];
    className?: string;
    cursor?: string;
    cursorClassName?: string;
}
