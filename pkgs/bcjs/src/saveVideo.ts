import { saveAs } from 'file-saver';
import { retry } from './utils/retry';

/**
 * function: `saveVideo`
 * Save video recording.
 */
export default function saveVideo(this: ReportState): void {
    if (!this.options.video) {
        throw Error(`Please specify media source. Can't save screen recording.`);
    }

    retry(saveVideoBlob.bind(this));
}

function saveVideoBlob(this: ReportState): void {
    if (!this.isVideoReady) {
        throw Promise.reject();
    }

    const blob = new Blob(this.chunks, { type: this.chunks[0].type });

    const fileName = `recording_${new Date().toLocaleString()}.mp4`;

    saveAs(blob, fileName);
}