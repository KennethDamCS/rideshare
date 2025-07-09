module.exports = function (api) {
    api.cache(true);

    return {
        // 1️⃣ Keep Expo’s preset first
        presets: [
            ['babel-preset-expo', {jsxImportSource: 'nativewind'}],
            // 2️⃣ Move NativeWind into *presets*, not plugins
            'nativewind/babel',
        ],

        // 3️⃣ Leave real plugins here
        plugins: [
            'expo-router/babel',           // needed if you use Expo Router
            'react-native-reanimated/plugin', // optional but common
        ],
    };
};
