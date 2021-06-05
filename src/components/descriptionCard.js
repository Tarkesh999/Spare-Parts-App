import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import ReadMore from "react-native-read-more-text"

export class DescriptionCard extends React.Component {
  render() {
    let { text } = this.props

    return (
      <View>
        <View style={styles.cardLabel}>
          <Text style={styles.cardLabelText}>ABOUT THIS ITEM</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardBody}>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}
            >
              <Text style={styles.cardText}>{text}</Text>
            </ReadMore>
          </View>
        </View>
      </View>
    )
  }

  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ marginTop: 5, color: "#dd0000" }} onPress={handlePress}>
        Read more
      </Text>
    )
  }

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ marginTop: 5, color: "#dd0000" }} onPress={handlePress}>
        Show less
      </Text>
    )
  }

  _handleTextReady = () => {
    // ...
  }
}

const styles = StyleSheet.create({
  card: {},
  cardBody: { paddingHorizontal: 4 },
  cardLabel: { marginTop: 32, marginBottom: 8, paddingHorizontal: 4 },
  cardLabelText: { fontWeight: "600" },
})
