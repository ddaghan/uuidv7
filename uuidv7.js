export function uuidv7() {
    return Date.now().toString(16).padStart(12, '0').replace(/(.{8})(.{4})/,'$1-$2') + '-7' + crypto.randomUUID().substring(15,36);
}
