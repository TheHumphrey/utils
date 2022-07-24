export const onlyNumberMask = (value: any) => {
  let calc: any = Math.round(value * 100) / 100
  calc = `${calc}`
  return calc.replace(/\D/g, "")
}

export const nameMask = (value: any) => {
  if (value === "" || value === undefined) return ""
  else {
    return value
      .replace(/[^a-záàâãéèêíïóôõöúçñ ]+$/i, "") // aceita somente letras e caracteres acentuados
      .replace(/^.{120}$/, "") // max-length 120
  }
}

export const cpfMask = (value: any) => {
  if (value === "" || value === undefined) return ""
  else {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1") // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }
}

export const cpfMaskToSend = (value: any) => {
  if (value === "" || value === undefined) return ""
  else {
    return value.replace(/[.-]/g, "")
  }
}

export function hourFormat(hour: any) {
  if (hour?.length > 2) {
    var string = hour;
    var metade = Math.floor(string.length / 2);
    return string.substr(0, metade) + ":" + string.substr(metade)
  }
}

export const cepMask = (value: any) => {
  if (value === "" || value === undefined) return ""
  else {
    try {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");
    } catch {
      return "";
    }
  }
}

export function dataMask(data: any) {
  if (!data) return ""
  const stringData = data.toString()
  return stringData
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1")
}

export const cnpjMask = (value: any) => {
  if (!value) return ""
  const stringCnpj = value.toString()
  return stringCnpj
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1")
}

export const rgMask = (value: any) => {
  if (!value) return ""
  const stringRg = value.toString()
  return stringRg
    .replace(/\D/g, "")
    .replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")
}

export function moneyMask(money: any) {
  if (!money) return ""
  return money
    .toString()
    .replace(/\D/g, "") // permite digitar apenas numero
    .replace(/(\d{1})(\d{14})$/, "$1.$2") // coloca ponto antes dos ultimos 14 digitos
    .replace(/(\d{1})(\d{11})$/, "$1.$2") // coloca ponto antes dos ultimos 11 digitos
    .replace(/(\d{1})(\d{8})$/, "$1.$2") // coloca ponto antes dos ultimos 8 digitos
    .replace(/(\d{1})(\d{5})$/, "$1.$2") // coloca ponto antes dos ultimos 5 digitos
    .replace(/(\d{1})(\d{1,2})$/, "$1,$2") // coloca virgula antes dos ultimos 2 digitos
}