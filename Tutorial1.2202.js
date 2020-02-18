const square =function(offset, length){
    const createOffset = function(offset) {
        let space = "";
        for (i = 1; i <= offset; i++) {
                space += " ";
        }
        return space;

    };
        let square = "";
        let s2t = createOffset(offset);
        for ( i = 1;i<=length;i++){
        line = "\n" +s2t;

            for ( k = 1; k<= length; k++ ){

                line += "*";
        }
            square += line;

    }
    return square;
};


console.log(square(10,5));

const triangle = function(offset, height){

}
const quavo = function(offset){

}