function exists(nodeModule) {
  try {
    require.resolve(nodeModule)
  } catch (e) {
    return false;
  }

  return true;
}

function requireIfExists(nodeModule, fallbackModule) {
  if (exists(nodeModule)) {
    return require(nodeModule)
  }

  if (fallbackModule) {
    return require(fallbackModule);
  }

  return null;
}

module.exports = requireIfExists;
