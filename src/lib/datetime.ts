export class Datetime {

    public formatTimeSince(date: Date | string, dateNow?: Date) {
        if (dateNow === undefined) {
            dateNow = new Date();
        }
        if (typeof date === 'string') {
            date = new Date(date);
        }
        const seconds = Math.floor((dateNow.getTime() - date.getTime()) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + ' ' + this.getPlural(interval, 'year', 'years');
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + ' ' + this.getPlural(interval, 'month', 'months');
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + ' ' + this.getPlural(interval, 'day', 'days');
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + ' ' + this.getPlural(interval, 'hour', 'hours');
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + ' ' + this.getPlural(interval, 'minute', 'minutes');
        }

        return Math.floor(seconds) + ' sec';
    }

    protected getPlural(count: number, single: string, plural: string): string {
        return count === 1 ? single : plural;
    }
}

export default new Datetime();
