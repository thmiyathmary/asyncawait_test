
class Main{
    async asyncFunc(): Promise<number> {
        return new Promise(async(resolve) => {
            await this.sleep(1000);
            resolve(1);
        })
        
    }

    syncFunc(): number {
        return 2;
    }

    async sleep(t: number): Promise<void> {
        return await new Promise(r => {
            setTimeout(() => {
                r();
            }, t);
        });
    }

    async doTest(): Promise<void> {
        const asyncResult = this.asyncFunc();
        console.log('asyncResult : ' + asyncResult);
        const syncResult = this.syncFunc();
        console.log('syncResult : ' + syncResult);
    }
}


console.log('start');
(async() => {
    console.log('create Main instance');
    const main = new Main();
    await main.doTest();
})();
