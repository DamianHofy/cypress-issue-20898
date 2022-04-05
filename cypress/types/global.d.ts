import { DataSeedDto } from '../utils/dtos/DataSeedDto';

declare global {
    /**
     * The `its()` command is wrapped standard `it()` and returns seed object.
     * @param text - test name
     * @param callback - test body
     * @returns DataSeedDto
     */
    const its: (text: string, callback: (r: DataSeedDto) => void) => void;
}
