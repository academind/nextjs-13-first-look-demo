'use client';

function IssueErrorPage({error}) {
  return <p>{error.message}</p>
}

export default IssueErrorPage;