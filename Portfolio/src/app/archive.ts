export class Archive{
     _name: String;
    _progress:String;
    _confirms:String;
    _confirmsNames:String[];


    setName(name:String){
        this._name = name;
    }

    setProgress(progress:String){
        this._progress = progress;
    }

    getName():String{
        return this._name;
    }

    getProgress():String{
        return this._progress;
    }

    getConfirms():String{
        return this._confirms;
    }

    setConfirms(confirms:String){
      this._confirms=confirms;
    }
}

