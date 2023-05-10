function decodeVariations(S) {
	/**
	@param S: string
	@return: integer
	*/
  if (S.length === 1) {
    return 1;
  } else if (S.length === 2) {
    
    if (parseInt(S) > 26) {
      return 1;
    } else if (parseInt(S) <= 26) {
        if (S[0] === '0') {
        return 0;
      } else if (S[1] === '0') {
        return 1;
      } else {
        return 2;
      }
    
    }   
  }
  
  let nDecode = 0;
	// case with one
  let leftChar1 = S[0];
  let restS1 = S.substring(1);
  if (leftChar1 === '0') {
    return 0;
  }
  nDecode = nDecode + decodeVariations(restS1)
  // case with two numbers
  let leftChar2 = S.substring(0,1);
  let restS2 = S.substring(2);
  //logic
  if (parseInt(S) > 26) {
    return nDecode;
  }
  nDecode = nDecode + decodeVariations(restS2)
  
  return nDecode;
}