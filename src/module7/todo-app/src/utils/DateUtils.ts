export namespace DateUtils {
    export function formatDate(date: Date): string {
      return date.toISOString().split('T')[0];
    }
  
    export function isOverdue(date: Date): boolean {
      return date < new Date();
    }
  }