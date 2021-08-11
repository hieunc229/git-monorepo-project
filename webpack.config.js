const path = require("path");

module.exports = function override(config, env) {

    if (env === "production") {
        let rule = config.module.rules[2].oneOf.find(r => r.test &&
            new RegExp(r.test).test(`.module.scss`)
            && (!r.exclude || !(new RegExp(r.exclude).test(`.module.scss`))));
        if (rule) {
            let cssModule = rule.use.find(item => item.loader && item.loader.indexOf(`css-loader`) !== -1);
            if (cssModule) {
                cssModule.options.modules = {
                    localIdentName: //env === "production" ?
                        '[sha1:hash:hex:5]'
                };

            }
        }
    }

    config.resolve.alias = Object.assign(config.resolve.alias, {
        '@module1': path.resolve(__dirname, './src/packages/module1/src'),
        '@packages': path.resolve(__dirname, './src/packages'),
    })

    return config;
}