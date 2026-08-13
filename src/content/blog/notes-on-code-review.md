# Notes on Code Review
# tags: process, ai-tools, engineering
A few things I keep coming back to when reviewing code, whether it's a
teammate's PR or an AI-assisted change.

## Look for the failure case, not just the happy path

The question that catches the most real bugs isn't "does this work" — it's
"what input or state breaks this". Empty collections, null values, retries,
concurrent writes. Most regressions live in the corners nobody exercised in
the demo.

## Keep the diff readable on its own

A reviewer shouldn't need the whole codebase in their head to evaluate a
change. If a PR needs a long verbal explanation to make sense, that's
usually a sign it should be split up or the code needs a comment explaining
*why*, not just *what*.

## AI-assisted review is a first pass, not a verdict

Tools are good at flagging likely issues quickly and consistently, but
confirming them still takes someone who understands the system's actual
constraints. Treat automated findings as a prioritized list to verify, not
as ground truth.
