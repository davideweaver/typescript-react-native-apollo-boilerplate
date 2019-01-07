import { Datetime } from '../datetime';

describe('datetime', () => {

    it('should format time since', async () => {

        const datetime = new Datetime();
        const input2 = new Date();
        const input1 = new Date(input2.getTime() - 1000 * 60 * 8);
        const result = datetime.formatTimeSince(input1, input2);

        expect(result).toEqual('8 minutes');
    });

});
