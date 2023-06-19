import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Modal } from "react-native";

export default function Overlay({ children }) {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleOverlay}>
                <View style={styles.openButton} />
            </TouchableOpacity>

            <Modal
                visible={isOverlayVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={toggleOverlay}
            >
                <View style={styles.overlay}>
                    <TouchableOpacity
                        style={styles.overlayBackground}
                        onPress={toggleOverlay}
                    >
                        <View style={styles.overlayContent}>{children}</View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 16,
        right: 16,
    },
    openButton: {
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: "#BBB",
        alignItems: "center",
        justifyContent: "center",
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    overlayBackground: {
        flex: 1,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    overlayContent: {
        backgroundColor: "white",
        width: "50%",
        padding: 20,
        borderRadius: 8,
    },
});
