//Se pregunta al usuario que acción quiere realizar si quiere cifrar o descifrar.
var firstQuestion = parseInt(prompt('Escribe 1 si quieres cifrar una palabra y 2 si quieres descifrarla.'));


if (firstQuestion === 1) {
  // Se le pedirá al usuario palabra a cifrar, nota: debe cumplir las condiciones ingresar palabra que no sea número y el usuario no podrá ingresar un campo vacio.

  var enterPhrase = prompt('Ingresa la palabra a cifrar **Solamente texto** ');

  var asciiUpperCase_A = 65;
  var asciiUpperCase_Z = 90;
  var asciiLowerCase_a = 97;
  var asciiLowerCase_z = 122;

  function validateEnterPhrase(enterPhrase) {
  while (enterPhrase == '') {
    enterPhrase = prompt ('Ingrese una cadena valida');
  } //Se cierra el while
  for (var i = 0; i<enterPhrase.length; i++) {
    var characterCode = enterPhrase.charCodeAt(i);

    if (characterCode < asciiUpperCase_A && characterCode > asciiUpperCase_Z || characterCode < asciiLowerCase_a && characterCode > asciiLowerCase_z) {

      enterPhrase = prompt ('Ingresa una cadena valida');

    } // } de abajo se cierra if dentro del for
  } //Se cierra for
  return enterPhrase;
} //Se cierra function validateEnterPhrase

  enterPhrase = validateEnterPhrase(enterPhrase);
  var enterPhraseToUpperCase = enterPhrase.toUpperCase();

  //Se crea function cipher que devuelve el mensaje encriptado según el Cifrado César.
  function cipher (enterPhraseToUpperCase) {
    var phraseCipher = '';

    for  (var i = 0; i<enterPhraseToUpperCase.length; i++) {
      var numAscii = enterPhraseToUpperCase.charCodeAt(i);

      if (numAscii >= 65 && numAscii <= 90) {
        var cipherNumAscii = ((numAscii - 65 + 33) % 26) + 65;
      //} de abajo cierra if dentro del for function cipher
    } else {
      var cipherNumAscii = ((numAscii - 97 + 33) % 26) + 97;

    }//Se cierra el else
    var newLetter = String.fromCharCode(cipherNumAscii);
    phraseCipher += newLetter;
    }//Se cierra el for de function cipher
    return  'Tu cifrado es: ' + phraseCipher;
  } //Se cierra la function cipher
  alert (cipher(enterPhraseToUpperCase));
  // } De abajo cierra if(firstQuestion === 1) general
} else if (firstQuestion === 2) {
  // Se le pedirá al usuario palabra a cifrar, nota: debe cumplir las condiciones ingresar palabra que no sea número y el usuario no podrá ingresar un campo vacio.

  var enterPhrase = prompt('Ingresa la palabra a decifrar **Solamente texto** ');

  var asciiUpperCase_A = 65;
  var asciiUpperCase_Z = 90;
  var asciiLowerCase_a = 97;
  var asciiLowerCase_z = 122;

  function validateEnterPhrase(enterPhrase) {
  while (enterPhrase == '') {
    enterPhrase = prompt ('Ingrese una cadena valida');
  } //Se cierra el while
  for (var i = 0; i<enterPhrase.length; i++) {
    var characterCode = enterPhrase.charCodeAt(i);

    if (characterCode < asciiUpperCase_A && characterCode > asciiUpperCase_Z || characterCode < asciiLowerCase_a && characterCode > asciiLowerCase_z) {

      enterPhrase = prompt ('Ingresa una cadena valida');

    } // } de abajo se cierra if dentro del for
  } //Se cierra for
  return enterPhrase;
} //Se cierra function validateEnterPhrase

  enterPhrase = validateEnterPhrase(enterPhrase);
  var enterPhraseToUpperCase = enterPhrase.toUpperCase();

  //Se crea function decipher que desencripta un mensaje, para desarrollar la formula se usa el Cifrado César.
  function decipher (enterPhraseToUpperCase) {
    var phraseDecipher = '';
    for (var j = 0; j<enterPhraseToUpperCase.length; j++) {
      var numAsciiDecipher = enterPhraseToUpperCase.charCodeAt(j);
      if ( numAsciiDecipher >= 65 && numAsciiDecipher <= 90) {
        var decipherNumAscii = ((numAsciiDecipher + 65 - 33) % 26) + 65;
        // } abajo se cierra el if dentro del for
      } else {
        var decipherNumAscii = ((numAsciiDecipher + 97 + 33) % 26) + 97;
      }//Se cierra el else dentro del for
      var newLetter = String.fromCharCode(decipherNumAscii);
      phraseDecipher += newLetter;

    } // Se cierra el for de la function decipher
    return 'Tu decifrado es: ' + phraseDecipher;
  } //Se cierra function decipher
  alert(decipher(enterPhraseToUpperCase));
  // } de abajo se cierra el else if (firstQuestion === 2)
} else {
  alert('Vuelve a intentarlo respetando los criterios que se señalan.');
}
