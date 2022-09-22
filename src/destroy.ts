// types
import type { ReportState } from "./types";

/**
 * function: `cleanUp`
 * Call to destroy/terminate/clean-up client.
 */
export function destroy(this: ReportState): void {
  this.recorderListeners.forEach((listener) =>
    this.recorder.removeEventListener(listener)
  );
}
