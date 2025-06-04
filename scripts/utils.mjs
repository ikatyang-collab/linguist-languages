function isBaseType(value) {
  switch (typeof value) {
    case 'boolean':
    case 'number':
    case 'string':
      return true
    default:
      return false
  }
}

function getBaseType(value) {
  return typeof value
}

export function getFieldType(
  value,
) {
  if (isBaseType(value)) {
    return { type: getBaseType(value) }
  }

  if (
    Array.isArray(value) &&
    new Set(value.map(x => typeof x)).size === 1 &&
    isBaseType(value[0])
  ) {
    return { type: 'array', subType: getBaseType(value[0]) }
  } /* c8 ignore start */ else {
    throw new Error(`Unexpected value:\n\n${JSON.stringify(value, null, 2)}`)
  }
  /* c8 ignore stop */
}

export function indent(value) {
  return value
    .split('\n')
    .map(x => `  ${x}`)
    .join('\n')
}
