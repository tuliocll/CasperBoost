/**
 * Copy actual url or share on Twitter or Linkedin
 *
 * @param {"copy" | "twitter" | "linkedin"} action
 * @returns null
 */
function copyAndShare(action) {
  const currentPageUrl = window.location.href;
  const tweetText = `Check this post: ${document.title}`;

  if (action === "copy") {
    navigator.clipboard.writeText(window.location.href);
    showToast("Copied successfully");
    return;
  }

  const share = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(currentPageUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(
      currentPageUrl
    )}`,
  };

  window.open(share[action], "_blank");
  showToast("Copied successfully");
}

function showToast(text) {
  const toast = document.getElementById("snackbar");

  toast.className = "show";
  toast.innerText = text;

  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
