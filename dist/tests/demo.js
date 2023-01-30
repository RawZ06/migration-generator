"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTableMigration = void 0;
const Migration_1 = require("../engine/Migration");
class CreateUserTableMigration extends Migration_1.Migration {
    up() {
        this.schema.create('users', (table) => {
            table.id();
            table.string('demo');
        });
    }
    down() {
        this.schema.drop('users');
    }
}
exports.CreateUserTableMigration = CreateUserTableMigration;
//# sourceMappingURL=demo.js.map