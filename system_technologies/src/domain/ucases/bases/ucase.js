module.exports =class UCase 
{
    constructor()
    {
        if(this.constructor ==UCase) throw new Error("This class can't be instantiated");
    }
    async apply(){
        throw new Error('Not implemented');
    }
}