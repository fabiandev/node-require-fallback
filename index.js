function exists(nodeModule) {
  try {
    require.resolve(nodeModule)
  } catch (e) {
    return false;
  }

  return true;
}

function requireIfExists(nodeModule, fallbackModule1, fallbackModule2) {
  if (exists(nodeModule)) {
    return require(nodeModule)
  }

  if (exists(fallbackModule1)) {
    return require(fallbackModule1);
  }

  if (exists(fallbackModule2)) {
    return require(fallbackModule2);
  }

  return null;
}

module.exports = requireIfExists;
