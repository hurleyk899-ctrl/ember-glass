import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, FontSize, Radius } from '@/utils/theme';

export default function JournalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>My Journal</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add" size={22} color={Colors.text} />
          </TouchableOpacity>
        </View>

        {/* Empty state */}
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>📓</Text>
          <Text style={styles.emptyTitle}>No entries yet</Text>
          <Text style={styles.emptyText}>Log your first session to start tracking your experience</Text>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startBtnText}>Log a Session</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg },
  content: { flexGrow: 1, paddingHorizontal: Spacing.md },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: Spacing.md },
  title: { fontSize: FontSize.xxl, fontWeight: '800', color: Colors.text },
  addBtn: { backgroundColor: Colors.primary, width: 38, height: 38, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center' },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 80 },
  emptyIcon: { fontSize: 56, marginBottom: Spacing.md },
  emptyTitle: { fontSize: FontSize.xl, fontWeight: '700', color: Colors.text, marginBottom: 8 },
  emptyText: { fontSize: FontSize.md, color: Colors.textSecondary, textAlign: 'center', maxWidth: 260, marginBottom: Spacing.lg },
  startBtn: { backgroundColor: Colors.primary, paddingHorizontal: Spacing.xl, paddingVertical: 14, borderRadius: Radius.full },
  startBtnText: { color: Colors.text, fontWeight: '700', fontSize: FontSize.md },
});
