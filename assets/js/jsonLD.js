/**
 * Fix JSON-LD to add `name` property,
 * based on a [SemRUSH](https://www.semrush.com/kb/1084-structured-data-items-site-audit)
 * error.
 *
 * (maybe its better to create a PR to [this file](https://github.com/TryGhost/Ghost/blob/b95c8275f25d96535376e069d81b0637155aa43a/ghost/core/core/frontend/meta/schema.js#L116))
 *
 */
function fixJSONLD() {
  try {
    const scriptFix = document.querySelector(
      "script[type='application/ld+json']"
    );

    if (!scriptFix) return;

    const parsedScript = JSON.parse(scriptFix.innerHTML);

    if (parsedScript.name) return;

    parsedScript.name = parsedScript.publisher.name;

    scriptFix.innerHTML = JSON.stringify(parsedScript);
  } catch (_) {}
}

fixJSONLD();
