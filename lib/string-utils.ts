export function extractHashSections(input: string) {
  const regex = /#([\s\S]*?)#/g;

  const extracted: string[] = [];
  let cleaned = input;

  let match;
  while ((match = regex.exec(input)) !== null) {
    extracted.push(match[1].trim()); // text inside ### ###
  }

  // Remove all ###...### including markers
  cleaned = cleaned.replace(regex, "");

  return {
    extracted: extracted[0] || '',
    cleaned: cleaned.trim(),
  };
}
