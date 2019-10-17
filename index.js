class Formatter {
    //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() +  string.slice(1); 
  }
  static sanitize(string){
    let s=string
    s=s.replace('-', 'QQQQQQ')
    s=s.replace("'", 'WWWW')
    s=s.replace(" ", 'EEEE')
    s=s.replace(/\W/g, '')
     s=s.replace( 'QQQQQQ','-')
     s=s.replace( 'WWWW',"'")
     s=s.replace( 'EEEE'," ")
     return s
  }
  
    static titleize(string){
      let s=string
          s= s.toLowerCase()
    .split(' ')
   s= s.map(element){
      if(element=='the'&& element=='a' && element== 'an' && element== 'but' && element== 'of' && element== 'and' && element== 'for' && element==  'at' && element==  'by' && element==  'from'){
        return element
      }
      else{
        element.charAt(0).toUpperCase() + s.substring(1)
      }
    }
   s=s.join(' ');

      return s
    }
}